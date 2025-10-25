from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from .models import Professional
from .serializers import ProfessionalSerializer
from django_filters.rest_framework import DjangoFilterBackend


class ProfessionalsAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Professional.objects.all()
    serializer_class = ProfessionalSerializer
    lookup_field = "id"

class ProfessionalsListCreateAPIView(ListCreateAPIView):
    queryset = Professional.objects.all()
    serializer_class = ProfessionalSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['source']
