# from django.contrib.auth.models import User, Group
from .models import Customer
from rest_framework import viewsets
from .serializers import CustomerSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Customer.objects.all().order_by('user_id')
    serializer_class = CustomerSerializer


# class GroupViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer