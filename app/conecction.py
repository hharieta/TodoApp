from aredis_om import get_redis_connection
import os

redis_pass = os.environ['REDIS_PASS']

redis = get_redis_connection(
    host='redis-18143.c270.us-east-1-3.ec2.cloud.redislabs.com',
    port=18143,
    password=redis_pass,
    decode_responses=True
)
