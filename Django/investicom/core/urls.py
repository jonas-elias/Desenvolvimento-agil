from django.urls import path
from .views import LoginView, DashView, CadastroView

urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("cadastro/", CadastroView.as_view(), name="cadastro"),
    path("dashboard/", DashView.as_view(), name="dashboard"),
]
