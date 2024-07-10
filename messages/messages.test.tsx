import ptMessages from './pt.json';
import enMessages from './en.json';

type MessagesObject = { [key: string]: T };

const hasSameKeys = (obj1: MessagesObject, obj2: MessagesObject) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || typeof obj1[key] !== typeof obj2[key]) {
      return false;
    }
    if (typeof obj1[key] === 'object' && obj1[key] !== null) {
      if (!hasSameKeys(obj1[key], obj2[key])) return false;
    }
  }
  return true;
}

describe("i18n messages", () => {
  it("should have the same lenght of keys", () => {
    expect(hasSameKeys(ptMessages, enMessages)).toBe(true);
  });
});
