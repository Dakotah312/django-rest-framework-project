from rest_framework import serializers
from .models import Professional

class ProfessionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professional
        fields = ['id', 'full_name', 'email', 'company_name', 'job_title', 'source', 'created_at']
        read_only_fields = ['id', 'created_at']
        extra_kwargs = {
            'company_name': {'required': False},
            'job_title': {'required': False},
        }
