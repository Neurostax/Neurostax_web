from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Subscriber
from .serializers import SubscriberSerializer

@api_view(['POST'])
def subscribe(request):
    serializer = SubscriberSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Subscription successful!"}, status=201)
    return Response(serializer.errors, status=400)
