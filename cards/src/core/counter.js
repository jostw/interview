// Count cards' rank.
export default function counter(deck) {
  const counter = [];

  deck.pluck('rank').ascendingSort()
      .forEach(rank => {
        const index = counter.pluck('rank').indexOf(rank);

        if (index < 0) {
          counter.push({ rank, count: 1 });
          return;
        }

        counter[index] = {
          ...counter[index],
          count: counter[index].count + 1
        };
      });

  return counter;
}
