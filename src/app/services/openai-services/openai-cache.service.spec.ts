import { OpenAICacheService } from './openai-cache.service';

describe('OpenAICacheService', () => {
  let service: OpenAICacheService;

  beforeEach(() => {
    service = new OpenAICacheService();
  });

  it('should set cache correctly', async () => {
    const heroName = 'Iron Man';
    const response = { name: 'Tony Stark' };

    await service.setCache(heroName, response);

    const cachedData = await service.getCache(heroName);
    expect(cachedData).toEqual(response);
  });

  it('should get cache correctly', async () => {
    const heroName = 'Iron Man';
    const response = { name: 'Tony Stark' };

    await service.setCache(heroName, response);

    const cachedData = await service.getCache(heroName);
    expect(cachedData).toEqual(response);
  });

  it('should delete cache correctly', async () => {
    const heroName = 'Iron Man';
    const response = { name: 'Tony Stark' };

    await service.setCache(heroName, response);
    await service.deleteCache(heroName);

    const cachedData = await service.getCache(heroName);
    expect(cachedData).toBeUndefined();
  });

});
