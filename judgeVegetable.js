function judgeVegetable (vegetables, metric) {
  for (let i = 0; i < vegetables.length; i++) {
    if (metric === 'redness') {
      console.log(vegetables.redness)

    } else if (metric === 'plumness') {

    }
    
  }
  return  vegetables.submitter
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)