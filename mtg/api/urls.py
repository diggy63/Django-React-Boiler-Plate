from django.urls import path
from . import views

urlpatterns = [
    path('getAll', views.GetViews.as_view()),
    path('create', views.CreateView.as_view()),
    path('viewAll', views.View.as_view()),
    path('delete/<int:id>', views.DeleteView.as_view())
]