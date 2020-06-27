# from rest_framework.generics import ListAPIView
from rest_framework import generics
from shop.models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from django.db.models import Count

class ProductListView(generics.ListAPIView):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoriesList(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class CategoryList(generics.ListAPIView):
    serializer_class = ProductSerializer
    def get_queryset(self):
        query_params = self.request.query_params
        cat = query_params.get('cat')
        result=Product.objects.filter(category=cat)
        return result

class RecommendedProducts(generics.ListAPIView):
    serializer_class = ProductSerializer
    def get_queryset(self):
        result=Product.objects.filter(recommended=True)
        return result