const wordCount = R.pipe(R.split(" "),R.length);
wordCount("ab cd efg") // 3
