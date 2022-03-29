const {HashTable, HashTableAlternative} = require('../ejer72.js');

test("HashTable should be defined", () => {
    expect(new HashTable(20)).toBeDefined();
});

test("HashTableAlternative should be defined", () => {
    expect(new HashTableAlternative(20)).toBeDefined();
});

test("HashTable should work OK", () => {
    const newHash = new HashTable();
    newHash.insert('Gandalf', 'moon');
    newHash.insert('John', 'sun');
    newHash.insert('Tyrion', 'earth');
    newHash.insert('Sansa', 'water');
    newHash.insert('Arya', 'fire');
    newHash.insert('Bran', 'air');

    newHash.remove('John');
    expect(newHash.search('Gandalf')).toEqual('moon');
});

test("HashTableAlternative should work OK", () => {
    const newHash = new HashTableAlternative(20);
newHash.set('Gandalf', 'moon');
newHash.set('John', 'sun');
newHash.get('John');
expect(newHash.keys()).toEqual(['Gandalf', 'John']);
});




