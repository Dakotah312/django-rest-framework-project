from django.urls import path
from .views import ProfessionalsAPIView, ProfessionalsListCreateAPIView

urlpatterns = [
    path("<int:id>/", ProfessionalsAPIView.as_view(), name="professionals-api"),
    path("", ProfessionalsListCreateAPIView.as_view(), name="professional-list-create"),
]
