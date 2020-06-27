from django.urls import path

from .views import ProductListView, ProductDetail, CategoriesList, CategoryList, RecommendedProducts

urlpatterns = [
	path('products/', ProductListView.as_view()),
	path('products/<int:pk>/', ProductDetail.as_view()),
	path('categories/', CategoriesList.as_view()),
	path('recommended/', RecommendedProducts.as_view()),
	
	path('cat/', CategoryList.as_view(), name='cat'),
]