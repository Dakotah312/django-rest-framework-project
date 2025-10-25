from django.db import models

SOURCE_CHOICES = [
    ('direct', 'direct'),
    ('partner', 'partner'),
    ('internal', 'internal'),
]

class Professional(models.Model):
    id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    company_name = models.CharField(max_length=200)
    job_title = models.CharField(max_length=200)
    source = models.CharField(max_length=10, choices=SOURCE_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name
