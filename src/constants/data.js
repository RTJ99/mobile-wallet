export const symptoms = [
  {label: 'Fever', value: 'fever'},
  {label: 'Cough', value: 'cough'},
  {label: 'Sore throat', value: 'soreThroat'},
  {label: 'Shortness of breath', value: 'shortnessOfBreath'},
  {label: 'Fatigue', value: 'fatigue'},
  {label: 'Headache', value: 'headache'},
  {label: 'Muscle aches', value: 'muscleAches'},
  {label: 'Runny nose', value: 'runnyNose'},
  {label: 'Loss of taste or smell', value: 'lossOfTasteOrSmell'},
];

export const conditions = [
  {
    name: 'COVID-19',
    symptoms: [
      'fever',
      'cough',
      'shortnessOfBreath',
      'fatigue',
      'lossOfTasteOrSmell',
    ],
  },
  {name: 'Common cold', symptoms: ['cough', 'soreThroat', 'runnyNose']},
  {
    name: 'Flu',
    symptoms: ['fever', 'cough', 'fatigue', 'muscleAches', 'headache'],
  },
  {
    name: 'Pneumonia',
    symptoms: ['fever', 'cough', 'shortnessOfBreath', 'fatigue'],
  },
  {name: 'Migraine', symptoms: ['headache', 'nausea']},
];
