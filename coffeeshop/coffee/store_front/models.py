from django.db import models

class Front(models.Model):
    name = models.CharField(max_length=255,blank=True)
    price = models.FloatField()
    quantity = models.IntegerField()
    image = models.CharField(max_length=2083,blank=True)