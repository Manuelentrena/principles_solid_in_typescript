import { Quality } from "@/quality";

describe('Quality', () => {
  describe('when create a new Quality', () => {
    describe('and qualily value is greater than 50', () => {
      it('should set 50 as a maximun value', () => {
        const qualily = new Quality(51);
        expect(qualily.getValue()).toBe(Quality.MAX_VALUE);
      });
    });
    describe('and qualily value is less than 0', () => {
      it('should set 0 as a minimum value', () => {
        const qualily = new Quality(-1);
        expect(qualily.getValue()).toBe(Quality.MIN_VALUE);
      });
    });
  });
  describe('when decrease the qualily', () => {
    it('should never be less than 0', () => {
      const quality = new Quality(0);
      quality.decrease(1);
      expect(quality.getValue()).toBe(Quality.MIN_VALUE);
    });
  });

  describe('when increase the qualily', () => {
    it('should never be greater than 50', () => {
      const quality = new Quality(50);
      quality.increase(1);
      expect(quality.getValue()).toBe(Quality.MAX_VALUE);
    });
  });

  describe('when reset the qualily', () => {
    it('it always must be 0', () => {
      const quality = new Quality(50);
      quality.resetQuality();
      expect(quality.getValue()).toBe(Quality.MIN_VALUE);
    });
  });
});
