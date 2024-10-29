const moviePosters = [
    {
      "id": 278,
      "poster_path": "https://image.tmdb.org/t/p/original//9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
      "title": "The Shawshank Redemption",
      "vote_count": 26811
    },
    {
      "id": 238,
      "poster_path": "https://image.tmdb.org/t/p/original//3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "title": "The Godfather",
      "vote_count": 20343
    },
    {
      "id": 240,
      "poster_path": "https://image.tmdb.org/t/p/original//hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      "title": "The Godfather Part II",
      "vote_count": 12271
    },
    {
      "id": 424,
      "poster_path": "https://image.tmdb.org/t/p/original//sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      "title": "Schindler's List",
      "vote_count": 15676
    },
    {
      "id": 389,
      "poster_path": "https://image.tmdb.org/t/p/original//ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
      "title": "12 Angry Men",
      "vote_count": 8511
    },
    {
      "id": 129,
      "poster_path": "https://image.tmdb.org/t/p/original//39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      "title": "Spirited Away",
      "vote_count": 16321
    },
    {
      "id": 19404,
      "poster_path": "https://image.tmdb.org/t/p/original//lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
      "title": "Dilwale Dulhania Le Jayenge",
      "vote_count": 4424
    },
    {
      "id": 155,
      "poster_path": "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "title": "The Dark Knight",
      "vote_count": 32544
    },
    {
      "id": 496243,
      "poster_path": "https://image.tmdb.org/t/p/original//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "title": "Parasite",
      "vote_count": 18018
    },
    {
      "id": 497,
      "poster_path": "https://image.tmdb.org/t/p/original//8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
      "title": "The Green Mile",
      "vote_count": 17210
    },
    {
      "id": 680,
      "poster_path": "https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      "title": "Pulp Fiction",
      "vote_count": 27642
    },
    {
      "id": 372058,
      "poster_path": "https://image.tmdb.org/t/p/original//vfJFJPepRKapMd5G2ro7klIRysq.jpg",
      "title": "Your Name.",
      "vote_count": 11242
    },
    {
      "id": 122,
      "poster_path": "https://image.tmdb.org/t/p/original//nnl6OWkyPpuMm595hmAxNW3rZFn.jpg",
      "title": "Beetlejuice",
      "vote_count": 7030
    },
    {
      "id": 923667,
      "poster_path": "https://image.tmdb.org/t/p/original//PywbVPeIhBFc33QXktnhMaysmL.jpg",
      "title": "Twilight of the Warriors: Walled In",
      "vote_count": 137
    },
    {
      "id": 970347,
      "poster_path": "https://image.tmdb.org/t/p/original//6PCnxKZZIVRanWb710pNpYVkCSw.jpg",
      "title": "The Killer",
      "vote_count": 198
    },
    {
      "id": 945961,
      "poster_path": "https://image.tmdb.org/t/p/original//b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
      "title": "Alien: Romulus",
      "vote_count": 989
    },
    {
      "id": 1032823,
      "poster_path": "https://image.tmdb.org/t/p/original//jwoaKYVqPgYemFpaANL941EF94R.jpg",
      "title": "Trap",
      "vote_count": 1065
    },
    {
      "id": 704239,
      "poster_path": "https://image.tmdb.org/t/p/original//d9CTnTHip1RbVi2OQbA2LJJQAGI.jpg",
      "title": "The Union",
      "vote_count": 634
    },
    {
      "id": 748783,
      "poster_path": "https://image.tmdb.org/t/p/original//p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
      "title": "The Garfield Movie",
      "vote_count": 922
    },
    {
      "id": 1226578,
      "poster_path": "https://image.tmdb.org/t/p/original//5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg",
      "title": "Longlegs",
      "vote_count": 819
    },
    {
      "id": 5492,
      "poster_path": "https://image.tmdb.org/t/p/original//eEkAY5veAnwxUOOlpF62KawkFO9.jpg",
      "title": "Gunner",
      "vote_count": 77
    },
    {
      "id": 930600,
      "poster_path": "https://image.tmdb.org/t/p/original//og1FteMFRInoQnlZeWqEn8XpXHh.jpg",
      "title": "The Deliverance",
      "vote_count": 277
    },
    {
      "id": 957452,
      "poster_path": "https://image.tmdb.org/t/p/original//58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg",
      "title": "The Crow",
      "vote_count": 218
    },
    {
      "id": 826510,
      "poster_path": "https://image.tmdb.org/t/p/original//dEsuQOZwdaFAVL26RjgjwGl9j7m.jpg",
      "title": "Harold and the Purple Crayon",
      "vote_count": 115
    },
    {
      "id": 1114513,
      "poster_path": "https://image.tmdb.org/t/p/original//dA4N6uWOnEMgbxXwFX7qX7adzs8.jpg",
      "title": "Speak No Evil",
      "vote_count": 83
    },
    {
      "id": 698687,
      "poster_path": "https://image.tmdb.org/t/p/original//qbkAqmmEIZfrCO8ZQAuIuVMlWoV.jpg",
      "title": "Transformers One",
      "vote_count": 14
    },
    {
      "id": 588648,
      "poster_path": "https://image.tmdb.org/t/p/original//ggZGnJLzO3BTu7ysuuIzou3Oex5.jpg",
      "title": "Dragonkeeper",
      "vote_count": 92
    },
    {
      "id": 929590,
      "poster_path": "https://image.tmdb.org/t/p/original//sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
      "title": "Civil War",
      "vote_count": 2379
    },
    {
      "id": 1225377,
      "poster_path": "https://image.tmdb.org/t/p/original//3ovFaFeojLFIl5ClqhtgYMDS8sE.jpg",
      "title": "The Mouse Trap",
      "vote_count": 27
    },
    {
      "id": 804616,
      "poster_path": "https://image.tmdb.org/t/p/original//1iWGGxHEwswZGvPSoMZlLFf0PNq.jpg",
      "title": "Something in the Water",
      "vote_count": 146
    },
    {
      "id": 1216191,
      "poster_path": "https://image.tmdb.org/t/p/original//uln9Efc2vzDOl0Fue2BPs8l1WO7.jpg",
      "title": "Oddity",
      "vote_count": 150
    },
    {
      "id": 157336,
      "poster_path": "https://image.tmdb.org/t/p/original//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      "title": "Interstellar",
      "vote_count": 35177
    },
    {
      "id": 938614,
      "poster_path": "https://image.tmdb.org/t/p/original//jGY62i0D0zitaGz4Ema7vTEYIXw.jpg",
      "title": "Late Night with the Devil",
      "vote_count": 817
    },
    {
      "id": 1184918,
      "poster_path": "https://image.tmdb.org/t/p/original//vcZfDONCxoOU7mosZEnkhYujBEG.jpg",
      "title": "The Wild Robot",
      "vote_count": 9
    },
    {
      "id": 1051891,
      "poster_path": "https://image.tmdb.org/t/p/original//rUcuageYgv9SsJoWuc0seRWG6JC.jpg",
      "title": "Thelma",
      "vote_count": 100
    },
    {
      "id": 1064028,
      "poster_path": "https://image.tmdb.org/t/p/original//gBenxR01Uy0Ev9RTIw6dVBPoyQU.jpg",
      "title": "Subservience",
      "vote_count": 36
    }
  ];
  
  moviePosters.sort((a, b) => a.title.localeCompare(b.title));
  
  
  export default moviePosters;