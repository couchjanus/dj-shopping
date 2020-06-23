# from rest_framework.generics import ListAPIView
from rest_framework import generics
from shop.models import Product
from .serializers import ProductSerializer

class ProductListView(generics.ListAPIView):
	queryset = Product.objects.all()[:4]
	serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer