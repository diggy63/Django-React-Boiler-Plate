from django.shortcuts import render
from itsdangerous import Serializer
from rest_framework import generics, status
from .serializers import RoomSerializer, ViewSerializer
from .models import Room, Views
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class View(generics.ListAPIView):
    queryset = Views.objects.all()
    serializer_class = ViewSerializer


class CreateView(APIView):
    serializer_class = ViewSerializer

    def post(self,request, format=None):
        serializer = self.serializer_class(data=request.data)
        print(serializer)
        if serializer.is_valid():
            test = serializer.data.get("test")
            view = Views(test = test)
            view.save()
        return Response(ViewSerializer(view).data, status=status.HTTP_201_CREATED)

class GetViews(APIView):
    def get(self,request, format=None):
        queryset = Views.objects.all()
        serializer= ViewSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class DeleteView(APIView):
    serializer_class = ViewSerializer
    def delete(self,request, format=None):
        query = View.object.fliter(id=request.params.id)
        query.delete()
        return Response(ViewSerializer(query).data, status=status.HTTP_201_CREATED)

