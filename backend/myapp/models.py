
# models.py
from djongo import models
class Order(models.Model):
    name = models.CharField(max_length=255)
    mobile = models.CharField(max_length=20)
    password = models.CharField(max_length=255)
    address = models.TextField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    

    def __str__(self):
        return self.name




    
# backend/myapp/models.py

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=15)
    address = models.TextField()

    def __str__(self):
        return self.name





