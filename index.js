const quizData = [
  {
    "name": "Kelinci",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Oryctolagus_cuniculus_Tasmania_2.jpg",
    "options": [
      "Singa",
      "Kucing",
      "Kelinci",
      "Beruang"
    ]
  },
  {
    "name": "Kuda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Horse_03.jpg",
    "options": [
      "Sapi",
      "Kuda",
      "Kambing",
      "Burung Hantu"
    ]
  },
  {
    "name": "Babi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pig_in_the_grass.jpg",
    "options": [
      "Babi",
      "Bebek",
      "Kambing",
      "Jerapah"
    ]
  },
  {
    "name": "Harimau",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg",
    "options": [
      "Zebra",
      "Bunglon",
      "Harimau",
      "Babi"
    ]
  },
  {
    "name": "Bebek",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Male_mallard_duck_2.jpg",
    "options": [
      "Katak",
      "Burung Merak",
      "Kambing",
      "Bebek"
    ]
  },
  {
    "name": "Katak",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Common_frog.jpg",
    "options": [
      "Katak",
      "Babi",
      "Bebek",
      "Anjing"
    ]
  },
  {
    "name": "Kelinci",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Oryctolagus_cuniculus_Tasmania_2.jpg",
    "options": [
      "Kelinci",
      "Kuda",
      "Zebra",
      "Babi"
    ]
  },
  {
    "name": "Unta",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Camel_kholm.jpg",
    "options": [
      "Babi",
      "Kucing",
      "Unta",
      "Burung Hantu"
    ]
  },
  {
    "name": "Burung Hantu",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/71/Tyto_alba_-British_Wildlife_Centre-8a_%28cropped%29.jpg",
    "options": [
      "Singa",
      "Panda",
      "Burung Hantu",
      "Beruang"
    ]
  },
  {
    "name": "Unta",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Camel_kholm.jpg",
    "options": [
      "Bunglon",
      "Anjing",
      "Serigala",
      "Unta"
    ]
  },
  {
    "name": "Beruang",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/2010-kodiak-bear-1.jpg",
    "options": [
      "Beruang",
      "Gajah",
      "Zebra",
      "Serigala"
    ]
  },
  {
    "name": "Anjing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    "options": [
      "Anjing",
      "Katak",
      "Burung Merak",
      "Kambing"
    ]
  },
  {
    "name": "Babi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pig_in_the_grass.jpg",
    "options": [
      "Babi",
      "Zebra",
      "Sapi",
      "Elang"
    ]
  },
  {
    "name": "Serigala",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Canis_lupus_laying.jpg",
    "options": [
      "Kucing",
      "Serigala",
      "Katak",
      "Burung Merak"
    ]
  },
  {
    "name": "Jerapah",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg",
    "options": [
      "Beruang",
      "Unta",
      "Jerapah",
      "Kelinci"
    ]
  },
  {
    "name": "Harimau",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg",
    "options": [
      "Bebek",
      "Kuda",
      "Harimau",
      "Unta"
    ]
  },
  {
    "name": "Singa",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
    "options": [
      "Singa",
      "Bunglon",
      "Beruang",
      "Burung Hantu"
    ]
  },
  {
    "name": "Ayam",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Rooster_portrait2.jpg",
    "options": [
      "Kuda",
      "Ayam",
      "Jerapah",
      "Sapi"
    ]
  },
  {
    "name": "Kerbau",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Water_buffalo_in_Laos.jpg",
    "options": [
      "Kuda",
      "Kerbau",
      "Unta",
      "Jerapah"
    ]
  },
  {
    "name": "Bebek",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Male_mallard_duck_2.jpg",
    "options": [
      "Bebek",
      "Harimau",
      "Sapi",
      "Singa"
    ]
  },
  {
    "name": "Kelinci",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Oryctolagus_cuniculus_Tasmania_2.jpg",
    "options": [
      "Unta",
      "Kelinci",
      "Kuda",
      "Burung Merak"
    ]
  },
  {
    "name": "Beruang",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/2010-kodiak-bear-1.jpg",
    "options": [
      "Kuda",
      "Anjing",
      "Beruang",
      "Bebek"
    ]
  },
  {
    "name": "Serigala",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Canis_lupus_laying.jpg",
    "options": [
      "Bunglon",
      "Serigala",
      "Babi",
      "Rusa"
    ]
  },
  {
    "name": "Sapi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cow_female_black_white.jpg",
    "options": [
      "Sapi",
      "Jerapah",
      "Babi",
      "Harimau"
    ]
  },
  {
    "name": "Katak",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Common_frog.jpg",
    "options": [
      "Beruang",
      "Harimau",
      "Kucing",
      "Katak"
    ]
  },
  {
    "name": "Burung Hantu",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/71/Tyto_alba_-British_Wildlife_Centre-8a_%28cropped%29.jpg",
    "options": [
      "Burung Hantu",
      "Anjing",
      "Jerapah",
      "Ayam"
    ]
  },
  {
    "name": "Ayam",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Rooster_portrait2.jpg",
    "options": [
      "Ayam",
      "Anjing",
      "Kerbau",
      "Rusa"
    ]
  },
  {
    "name": "Kuda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Horse_03.jpg",
    "options": [
      "Kambing",
      "Babi",
      "Kuda",
      "Elang"
    ]
  },
  {
    "name": "Bunglon",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Chamaeleo_calyptratus_1_Luc_Viatour.jpg",
    "options": [
      "Burung Merak",
      "Zebra",
      "Elang",
      "Bunglon"
    ]
  },
  {
    "name": "Kerbau",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Water_buffalo_in_Laos.jpg",
    "options": [
      "Kerbau",
      "Zebra",
      "Burung Merak",
      "Bunglon"
    ]
  },
  {
    "name": "Sapi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cow_female_black_white.jpg",
    "options": [
      "Anjing",
      "Rusa",
      "Sapi",
      "Babi"
    ]
  },
  {
    "name": "Kucing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg",
    "options": [
      "Kucing",
      "Beruang",
      "Sapi",
      "Anjing"
    ]
  },
  {
    "name": "Babi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pig_in_the_grass.jpg",
    "options": [
      "Kucing",
      "Burung Merak",
      "Babi",
      "Harimau"
    ]
  },
  {
    "name": "Unta",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Camel_kholm.jpg",
    "options": [
      "Kuda",
      "Rusa",
      "Unta",
      "Katak"
    ]
  },
  {
    "name": "Burung Merak",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Peacock_Plumage.jpg",
    "options": [
      "Panda",
      "Beruang",
      "Burung Merak",
      "Kelinci"
    ]
  },
  {
    "name": "Kuda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Horse_03.jpg",
    "options": [
      "Kuda",
      "Serigala",
      "Kerbau",
      "Katak"
    ]
  },
  {
    "name": "Sapi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cow_female_black_white.jpg",
    "options": [
      "Sapi",
      "Bebek",
      "Panda",
      "Burung Hantu"
    ]
  },
  {
    "name": "Babi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pig_in_the_grass.jpg",
    "options": [
      "Katak",
      "Anjing",
      "Bunglon",
      "Babi"
    ]
  },
  {
    "name": "Kuda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Horse_03.jpg",
    "options": [
      "Babi",
      "Kuda",
      "Burung Merak",
      "Jerapah"
    ]
  },
  {
    "name": "Kuda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Horse_03.jpg",
    "options": [
      "Kucing",
      "Kuda",
      "Harimau",
      "Babi"
    ]
  },
  {
    "name": "Burung Hantu",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/71/Tyto_alba_-British_Wildlife_Centre-8a_%28cropped%29.jpg",
    "options": [
      "Bebek",
      "Kelinci",
      "Bunglon",
      "Burung Hantu"
    ]
  },
  {
    "name": "Babi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pig_in_the_grass.jpg",
    "options": [
      "Panda",
      "Rusa",
      "Babi",
      "Burung Merak"
    ]
  },
  {
    "name": "Jerapah",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg",
    "options": [
      "Serigala",
      "Jerapah",
      "Kerbau",
      "Panda"
    ]
  },
  {
    "name": "Katak",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Common_frog.jpg",
    "options": [
      "Kelinci",
      "Unta",
      "Jerapah",
      "Katak"
    ]
  },
  {
    "name": "Unta",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Camel_kholm.jpg",
    "options": [
      "Singa",
      "Unta",
      "Gajah",
      "Jerapah"
    ]
  },
  {
    "name": "Babi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pig_in_the_grass.jpg",
    "options": [
      "Rusa",
      "Babi",
      "Burung Merak",
      "Kelinci"
    ]
  },
  {
    "name": "Kambing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Domestic_goat_kid.jpg",
    "options": [
      "Kambing",
      "Gajah",
      "Ayam",
      "Jerapah"
    ]
  },
  {
    "name": "Bebek",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Male_mallard_duck_2.jpg",
    "options": [
      "Anjing",
      "Babi",
      "Bebek",
      "Ayam"
    ]
  },
  {
    "name": "Sapi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cow_female_black_white.jpg",
    "options": [
      "Kambing",
      "Kerbau",
      "Burung Merak",
      "Sapi"
    ]
  },
  {
    "name": "Bunglon",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Chamaeleo_calyptratus_1_Luc_Viatour.jpg",
    "options": [
      "Kerbau",
      "Kucing",
      "Bunglon",
      "Burung Hantu"
    ]
  },
  {
    "name": "Kuda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Horse_03.jpg",
    "options": [
      "Kuda",
      "Kerbau",
      "Ayam",
      "Singa"
    ]
  },
  {
    "name": "Anjing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    "options": [
      "Jerapah",
      "Anjing",
      "Babi",
      "Gajah"
    ]
  },
  {
    "name": "Kelinci",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Oryctolagus_cuniculus_Tasmania_2.jpg",
    "options": [
      "Babi",
      "Kelinci",
      "Harimau",
      "Beruang"
    ]
  },
  {
    "name": "Ayam",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Rooster_portrait2.jpg",
    "options": [
      "Ayam",
      "Kambing",
      "Kucing",
      "Kerbau"
    ]
  },
  {
    "name": "Bunglon",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Chamaeleo_calyptratus_1_Luc_Viatour.jpg",
    "options": [
      "Panda",
      "Bunglon",
      "Beruang",
      "Ayam"
    ]
  },
  {
    "name": "Unta",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Camel_kholm.jpg",
    "options": [
      "Burung Hantu",
      "Kucing",
      "Unta",
      "Jerapah"
    ]
  },
  {
    "name": "Rusa",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Red_deer.jpg",
    "options": [
      "Burung Hantu",
      "Rusa",
      "Singa",
      "Harimau"
    ]
  },
  {
    "name": "Kambing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Domestic_goat_kid.jpg",
    "options": [
      "Kambing",
      "Harimau",
      "Bebek",
      "Rusa"
    ]
  },
  {
    "name": "Katak",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Common_frog.jpg",
    "options": [
      "Katak",
      "Burung Merak",
      "Kelinci",
      "Unta"
    ]
  },
  {
    "name": "Bunglon",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Chamaeleo_calyptratus_1_Luc_Viatour.jpg",
    "options": [
      "Zebra",
      "Bunglon",
      "Rusa",
      "Kuda"
    ]
  },
  {
    "name": "Sapi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cow_female_black_white.jpg",
    "options": [
      "Sapi",
      "Burung Hantu",
      "Rusa",
      "Singa"
    ]
  },
  {
    "name": "Zebra",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Plains_Zebra_Equus_quagga.jpg",
    "options": [
      "Kambing",
      "Bebek",
      "Zebra",
      "Jerapah"
    ]
  },
  {
    "name": "Zebra",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Plains_Zebra_Equus_quagga.jpg",
    "options": [
      "Serigala",
      "Zebra",
      "Burung Merak",
      "Babi"
    ]
  },
  {
    "name": "Unta",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Camel_kholm.jpg",
    "options": [
      "Sapi",
      "Anjing",
      "Zebra",
      "Unta"
    ]
  },
  {
    "name": "Serigala",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Canis_lupus_laying.jpg",
    "options": [
      "Harimau",
      "Gajah",
      "Jerapah",
      "Serigala"
    ]
  },
  {
    "name": "Bunglon",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Chamaeleo_calyptratus_1_Luc_Viatour.jpg",
    "options": [
      "Burung Merak",
      "Elang",
      "Babi",
      "Bunglon"
    ]
  },
  {
    "name": "Kerbau",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Water_buffalo_in_Laos.jpg",
    "options": [
      "Beruang",
      "Kucing",
      "Kerbau",
      "Kuda"
    ]
  },
  {
    "name": "Rusa",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Red_deer.jpg",
    "options": [
      "Anjing",
      "Katak",
      "Rusa",
      "Kucing"
    ]
  },
  {
    "name": "Sapi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cow_female_black_white.jpg",
    "options": [
      "Bunglon",
      "Sapi",
      "Burung Hantu",
      "Katak"
    ]
  },
  {
    "name": "Jerapah",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg",
    "options": [
      "Jerapah",
      "Babi",
      "Kelinci",
      "Beruang"
    ]
  },
  {
    "name": "Kuda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Horse_03.jpg",
    "options": [
      "Jerapah",
      "Kerbau",
      "Kuda",
      "Kucing"
    ]
  },
  {
    "name": "Unta",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Camel_kholm.jpg",
    "options": [
      "Anjing",
      "Babi",
      "Unta",
      "Serigala"
    ]
  },
  {
    "name": "Sapi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cow_female_black_white.jpg",
    "options": [
      "Burung Merak",
      "Kucing",
      "Sapi",
      "Anjing"
    ]
  },
  {
    "name": "Zebra",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Plains_Zebra_Equus_quagga.jpg",
    "options": [
      "Harimau",
      "Kucing",
      "Singa",
      "Zebra"
    ]
  },
  {
    "name": "Panda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
    "options": [
      "Elang",
      "Unta",
      "Kambing",
      "Panda"
    ]
  },
  {
    "name": "Gajah",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg",
    "options": [
      "Gajah",
      "Sapi",
      "Burung Merak",
      "Jerapah"
    ]
  },
  {
    "name": "Panda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
    "options": [
      "Panda",
      "Gajah",
      "Ayam",
      "Bunglon"
    ]
  },
  {
    "name": "Kerbau",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Water_buffalo_in_Laos.jpg",
    "options": [
      "Anjing",
      "Kerbau",
      "Kucing",
      "Gajah"
    ]
  },
  {
    "name": "Babi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pig_in_the_grass.jpg",
    "options": [
      "Babi",
      "Panda",
      "Elang",
      "Ayam"
    ]
  },
  {
    "name": "Gajah",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg",
    "options": [
      "Serigala",
      "Kelinci",
      "Gajah",
      "Ayam"
    ]
  },
  {
    "name": "Kucing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg",
    "options": [
      "Kucing",
      "Katak",
      "Kambing",
      "Kelinci"
    ]
  },
  {
    "name": "Panda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
    "options": [
      "Beruang",
      "Sapi",
      "Kelinci",
      "Panda"
    ]
  },
  {
    "name": "Bunglon",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Chamaeleo_calyptratus_1_Luc_Viatour.jpg",
    "options": [
      "Burung Hantu",
      "Bunglon",
      "Kuda",
      "Kerbau"
    ]
  },
  {
    "name": "Kucing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg",
    "options": [
      "Kambing",
      "Kucing",
      "Harimau",
      "Beruang"
    ]
  },
  {
    "name": "Kambing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Domestic_goat_kid.jpg",
    "options": [
      "Kambing",
      "Beruang",
      "Babi",
      "Panda"
    ]
  },
  {
    "name": "Kuda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Horse_03.jpg",
    "options": [
      "Beruang",
      "Kucing",
      "Kuda",
      "Sapi"
    ]
  },
  {
    "name": "Anjing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    "options": [
      "Anjing",
      "Jerapah",
      "Ayam",
      "Rusa"
    ]
  },
  {
    "name": "Bunglon",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Chamaeleo_calyptratus_1_Luc_Viatour.jpg",
    "options": [
      "Katak",
      "Harimau",
      "Bebek",
      "Bunglon"
    ]
  },
  {
    "name": "Kerbau",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Water_buffalo_in_Laos.jpg",
    "options": [
      "Kerbau",
      "Gajah",
      "Harimau",
      "Zebra"
    ]
  },
  {
    "name": "Kambing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Domestic_goat_kid.jpg",
    "options": [
      "Panda",
      "Kuda",
      "Beruang",
      "Kambing"
    ]
  },
  {
    "name": "Panda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
    "options": [
      "Anjing",
      "Kuda",
      "Panda",
      "Kelinci"
    ]
  },
  {
    "name": "Kucing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg",
    "options": [
      "Jerapah",
      "Kucing",
      "Beruang",
      "Anjing"
    ]
  },
  {
    "name": "Anjing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
    "options": [
      "Anjing",
      "Kuda",
      "Serigala",
      "Panda"
    ]
  },
  {
    "name": "Kelinci",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Oryctolagus_cuniculus_Tasmania_2.jpg",
    "options": [
      "Burung Merak",
      "Bebek",
      "Panda",
      "Kelinci"
    ]
  },
  {
    "name": "Burung Merak",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Peacock_Plumage.jpg",
    "options": [
      "Burung Merak",
      "Kambing",
      "Singa",
      "Bunglon"
    ]
  },
  {
    "name": "Singa",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
    "options": [
      "Serigala",
      "Singa",
      "Kelinci",
      "Unta"
    ]
  },
  {
    "name": "Sapi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cow_female_black_white.jpg",
    "options": [
      "Babi",
      "Sapi",
      "Beruang",
      "Katak"
    ]
  },
  {
    "name": "Unta",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Camel_kholm.jpg",
    "options": [
      "Babi",
      "Unta",
      "Kelinci",
      "Burung Hantu"
    ]
  },
  {
    "name": "Singa",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
    "options": [
      "Burung Merak",
      "Burung Hantu",
      "Gajah",
      "Singa"
    ]
  },
  {
    "name": "Babi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pig_in_the_grass.jpg",
    "options": [
      "Bebek",
      "Ayam",
      "Babi",
      "Bunglon"
    ]
  }
];
