import { CompositeSpecification, RangeSpecification } from "@/Specification";
import { expect } from 'vitest';

class TrueSpecification extends CompositeSpecification<boolean|null> {

    isSatisfiedBy(): true  {
        return true;
    }

}

class FalseSpecification extends CompositeSpecification<boolean|null> {

    isSatisfiedBy(): false {
        return false;
    }

}


describe('Specification Test', () => {
  it('false spec must be false', () => {
    expect(new FalseSpecification().isSatisfiedBy()).toBe(false)
  });
  it('true spec must be true', () => {
    expect(new TrueSpecification().isSatisfiedBy()).toBe(true)
  });
  /* AND */
  it('false and false spec must be false', () => {
    expect(new FalseSpecification()
      .and(new FalseSpecification())
      .isSatisfiedBy(false)).toBe(false)

  });
  it('false and true spec must be false', () => {
    expect(new FalseSpecification()
      .and(new TrueSpecification())
      .isSatisfiedBy(true)).toBe(false)
  });
  it('true and false spec must be false', () => {
    expect(new TrueSpecification()
      .and(new FalseSpecification())
      .isSatisfiedBy(false)).toBe(false)

  });
  it('true and true spec must be true', () => {
    expect(new TrueSpecification()
      .and(new TrueSpecification())
      .isSatisfiedBy(true)).toBe(true)
  });
  /* OR */
  it('false or false spec must be false', () => {
    expect(
      new FalseSpecification()
      .or(new FalseSpecification())
      .isSatisfiedBy(false)).toBe(false);
  });
  it('false or true spec must be true', () => {
    expect(
      new FalseSpecification()
      .or(new TrueSpecification())
      .isSatisfiedBy(true)).toBe(true);
  });
  it('true or false spec must be true', () => {
    expect(
      new TrueSpecification()
      .or(new FalseSpecification())
      .isSatisfiedBy(false)).toBe(true);
  });
  it('true or true spec must be true', () => {
    expect(
      new TrueSpecification()
      .or(new TrueSpecification())
      .isSatisfiedBy(true)).toBe(true);
  });
  /* DEFAULT VALUE */
  it('true not spec must be false', () => {
     expect(new TrueSpecification().not().isSatisfiedBy(null)).toBe(false);
  });
  it('false not spec must be true', () => {
    expect(new FalseSpecification().not().isSatisfiedBy(null)).toBe(true);
  });

  /* RANGE */

  it('should combine range specs and satisfy them', () => {
      const range1 = new RangeSpecification(1,5);
      const range2 = new RangeSpecification(3,4);
      const combinedAnd = range1.and(range2);
      expect(combinedAnd.isSatisfiedBy(4)).toBe(true);
  });

   it('should combine range specs and not satisfy them', () => {
      const range1 = new RangeSpecification(1,5);
      const range2 = new RangeSpecification(7,10);
      const combinedAnd = range1.or(range2);
      expect(combinedAnd.isSatisfiedBy(6)).toBe(false);
   });

  /* AND NOT */

  it('true andNot true spec should be false', () => {
      expect(
          new TrueSpecification().andNot(new TrueSpecification()).isSatisfiedBy(null)
      ).toBe(false);
  });

  it('true andNot false spec should be true', () => {
     expect(
        new TrueSpecification().andNot(new FalseSpecification()).isSatisfiedBy(null)
     ).toBe(true);
  });

  it('false andNot true spec should be true', () => {
      expect(
          new FalseSpecification().andNot(new TrueSpecification()).isSatisfiedBy(null)
      ).toBe(true);
  });

  it('false andNot false spec should be true', () => {
      expect(
          new FalseSpecification().andNot(new FalseSpecification()).isSatisfiedBy(null)
      ).toBe(true);
  });

  /* OR NOT */

  it('true orNot true spec should be false', () => {
      expect(
          new TrueSpecification().orNot(new TrueSpecification()).isSatisfiedBy(null)
      ).toBe(false);
  });

  it('true orNot false spec should be false', () => {
     expect(
        new TrueSpecification().orNot(new FalseSpecification()).isSatisfiedBy(null)
     ).toBe(false);
  });

  it('false orNot true spec should be false', () => {
      expect(
          new FalseSpecification().orNot(new TrueSpecification()).isSatisfiedBy(null)
      ).toBe(false);
  });

  it('false orNot false spec should be true', () => {
      expect(
          new FalseSpecification().orNot(new FalseSpecification()).isSatisfiedBy(null)
      ).toBe(true);
  });

});
