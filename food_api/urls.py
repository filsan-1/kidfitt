from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'api/food-log', views.FoodLogViewSet, basename='food-log')

urlpatterns = [
    path('api/user/total-calories', views.total_user_calories),

    # React component URLS
    path('api/breakfast', views.breakfast_list),
    path('api/lunch', views.lunch_list),
    path('api/dinner', views.dinner_list),
    path('api/snacks', views.snack_list),
    path('api/cheat', views.cheat_list),
    path('api/30-day-calories', views.get_30_days_calories),
]

# Add this to ensure static files are served during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Register your API routes
urlpatterns += router.urls
