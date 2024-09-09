from django.urls import path
from .views import  ContactList, ContactDetail
from .views import OrderListCreateView, OrderDetailAPIView


urlpatterns = [
    path('api/contact/', ContactList.as_view(), name='contact-list'),
    path('api/contact/<int:pk>/', ContactDetail.as_view(), name='contact-detail'),
    path('api/orders/', OrderListCreateView.as_view(), name='order-list-create'),
    path('api/orders/<int:pk>/', OrderDetailAPIView.as_view(), name='order-detail'),
   
    
]