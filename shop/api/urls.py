from django.urls import path

from .views import ProductListView, ProductDetail

urlpatterns = [
	path('products/', ProductListView.as_view()),
	path('products/<int:pk>/', ProductDetail.as_view()),
]