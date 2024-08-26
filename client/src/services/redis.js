import { Redis } from "@upstash/redis";

export async function createRedisCustomer({ customerId, cartId = null }) {
  const redis = new Redis({
    url: `${process.env.NEXT_PUBLIC_REDIS_URL}`,
    token: `${process.env.NEXT_PUBLIC_REDIS_TOKEN}`,
  });
  const newRedisCustomer = await redis.set(customerId, { customerId, cartId });

  return newRedisCustomer;
}

export async function getRedisCustomer(customerId) {
  const redis = new Redis({
    url: `${process.env.NEXT_PUBLIC_REDIS_URL}`,
    token: `${process.env.NEXT_PUBLIC_REDIS_TOKEN}`,
  });
  try {
    var redisData = await redis.get(customerId);
  } catch (error) {
    console.log("error fetching redis data", error);
  }
  return redisData;
}
