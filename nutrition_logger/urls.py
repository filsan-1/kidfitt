from django.contrib import admin
from django.urls import path, include
from tracker.views import home


urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),  # Include allauth URLs
    path('tracker/', include('tracker.urls', namespace='tracker')),

    path('', home, name='home'),
   ]