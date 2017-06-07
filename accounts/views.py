from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
import pdb
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
# Create your views here.

class SignUp(APIView):

    def post(self, request, format='json'):
        pdb.set_trace()
        username = request.data["username"]
        email = request.data["email"]
        password = request.data["password"]
        user = User(username=username, email=email, password=password)
        try:
            user.full_clean()
        except ValidationError as e:
            return JsonResponse(e.message_dict)
        user.set_password(user.password)
        user.save()
        return JsonResponse(user, safe="False")

    def get(self, request):
        return HttpResponse("yoo")
