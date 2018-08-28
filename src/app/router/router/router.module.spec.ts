import { AppRoutingModule } from './router.module';

describe('RouterModule', () => {
  let routerModule: AppRoutingModule;

  beforeEach(() => {
    routerModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(routerModule).toBeTruthy();
  });
});
