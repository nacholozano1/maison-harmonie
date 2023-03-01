// Funcion para cambiar el lenguaje

// Create a function to change
    // the hash value of the page
    function changeLanguage(lang) {
        location.hash = lang;
        location.reload();
      }
    
      // Define the language reload anchors
      let container0 = {
        eng: {
          title: "Gallery",
          text1: "Book now"
        },
        es: {
          title: "Galería",
          text1: "Reserve ahora"
        },
      }
      
      let container1 = {
        eng: {
          title: "Maison Harmonie: Immerse yourself in the history and luxury of a unique residence.",
          text1: "The house is completely renovated with all the modern comforts and respecting the style and the original architecture. It was originally built as an annex of the Church. Then, the building was extended in the 17th century, slightly modified at the end of the 19th century, and finally fully renovated five years ago. All bathrooms and kitchen are brand new. Fully furnished.",
          text2:" Huge secluded garden, private, full of intimacy, lots of light and sun.",
          text3:"The house was furnished by its owners (one of whom is an architect and the other an art historian) by combining antiques, art objects, and modern design." 
        },
        es: {
          title: "Maison Harmonie: Sumérgete en la historia y el lujo de una residencia única.",
          text1:"El edificio fue el antiguo anexo de la iglesia, todavía se pueden encontrar vestigios de la Edad Media. En el Siglo XVII, la estructura fue rehecha tomando la forma actual. En el Siglo XIX, se le agrega una torre y las dependencias. La casa fue finalmente restaurada y amueblada hace cinco años.",
          text2:"Posee un gran jardín privado sin la posibilidad de vistas de los pasantes, soleado y calmo, con diferentes zonas exteriores. En la planta baja hay dos grandes salones, una biblioteca y una oficina para relajarse. ",
          text3:"La casa fue decorada integramente por sus propietarios, uno arquitecto y el otro historiador del Arte, combinando antiguedades y objetos de arte y diseño moderno. Se dispone de cuatro cómodas suite para su elección."
        },
      };

      let container2 = {
        eng: {
          title: "The best place for lovers of gastronomy and history.",
          text1: "Maison Harmonie is located next to the church of La Châtre. In the heart of the historic district of the city, in a very quiet area, close to shops, services, cafes, restaurants, museums, pastry shops and chocolatiers. 200 meters from the weekly market that offers quality regional products from Berry.",
        },
        es: {
          title: "La dirección ideal para los amantes de la gastronomía y la historia.",
          text1:"Maravillosa mansión al lado de la iglesia de La Châtre.En el corazón del barrio histórico de la ciudad, en una zona muy tranquila y cercana a comercios, servicios, cafés, restaurantes, museos, pastelerías y chocolaterías. A solamente 200 metros del mercado semanal que ofrece gran variedad de productos regionales de calidad del Berry.",
        },
      }

      let container3 = {
        eng: {
          title: "Discover nature and culture in La Châtre.",
          text1: "The area offers a great range of natural walks by the river and cultural heritage, (former antique hotels, and medieval streets). The House of George Sand in Nohant is just 3 km away from La Châtre. ",
          text2: "The central location of the town in the geography of France makes it the perfect place to visit several authentical and historical places in Central France; abbeys, castles, beautiful villages and cities.",
          text3: "Culture, nature and tradition at its best! Many special Music Festivals, such as the Chopin International Festival, La Grange au pianos and other art and antique events take place in the area." 
        },
        es: {
          title: "Descubre la naturaleza y la cultura en La Châtre.",
          text1:"El lugar ofrece una gran variedad de paseos de carácter natural al lado del río de patrimonio cultural (antiguas mansiones, casas históricas y calles medievales). La casa museo de George Sand se encuentra en Nohant, a 3 km. de La Châtre.",
          text2:"La ubicación central de La Châtre en la región del Berry es perfecta para visitar numerosos lugares de interés cultural y natural de la región Centre-Val de Loire: castillos, abadías, pueblos pintorescos, ciudades y bosques. Una sumatoria de cosas que mezcla la cultura, la naturaleza y sobre todo la autenticidad.",
          text3:"Diversos festivales de música, como así también eventos de arte y salones de anticuarios tienen lugar en los alrededores, como el Festival Chopin a Nohant y La Granja de los Pianos en Chassignolles."
        },
      };

      let container4 = {
        eng: {
          title: "Location",
        },
        es: {
          title: "Ubicación",
        },
      }

      let container5 = {
        eng: {
          title: "Book your stay now.",
          text1: "Are you ready to experience the history of La Châtre? Book your stay now and discover the beauty of our historic Maison in La Châtre. With world-class amenities, exceptional service, and a privileged location in the heart of the city, we offer the perfect combination of comfort, elegance, and convenience. Whether you're here for a weekend getaway or an extended stay, we look forward to welcoming you to our beautiful Maison.",
          button: "Book now."
        },
        es: {
          title: "Haz tu reserva ya.",
          text1: "Estás listo para vivir la historia de La Châtre? Reserva tu estadía ahora y descubre la belleza de nuestra Casa histórica en La Châtre. Con instalaciones de clase mundial, un servicio excepcional y una ubicación privilegiada en el corazón de la ciudad, ofrecemos la combinación perfecta de comodidad, elegancia y conveniencia. Ya sea que estés aquí para una escapada de fin de semana o una estadía prolongada, esperamos darte la bienvenida a nuestra hermosa Casa.",
          button: "Reservá ahora."
        },
      }

      let container6 = {
        eng: {
          title: "Large suite in historic house. La Châtre.",
        },
        es: {
          title: "Gran suite en casa histórica. La Châtre.",
        },
      }

      let container7 = {
        eng: {
          title: "Luxury suite in historic residence. La Châtre.",
        },
        es: {
          title: "Suite de lujo en residencia histórica. La Châtre.",
        },
      }

      let container8 = {
        eng: {
          title: "Lovely suite in historic house. La Châtre.",
        },
        es: {
          title: "Preciosa suite en casa histórica. La Châtre.",
        },
      }

      let container9 = {
        eng: {
          title: "Luxury suite in historic residence. La Châtre.",
        },
        es: {
          title: "Suite de lujo en residencia histórica. La Châtre.",
        },
      }
    
      // Check if a hash value exists in the URL
      if (window.location.hash) {
    
        // Set the content of the webpage 
        // depending on the hash value
        if (window.location.hash == "#es") {
          galeri.textContent =
          container0.es.title
          reserva.textContent =
          container0.es.text1
          titulo1.textContent =
          container1.es.title;
          p1.textContent =
          container1.es.text1
          p2.textContent =
          container1.es.text2
          p3.textContent =
          container1.es.text3
          titulo2.textContent =
          container2.es.title;
          p4.textContent =
          container2.es.text1
          titulo3.textContent =
          container3.es.title;
          p5.textContent =
          container3.es.text1
          p6.textContent =
          container3.es.text2
          p7.textContent =
          container3.es.text3
          locacion.textContent =
          container4.es.title;
          titulo4.textContent =
          container5.es.title;
          p8.textContent =
          container5.es.text1
          boton.textContent=
          container5.es.button
          suite.textContent =
          container6.es.title;
          suite1.textContent =
          container7.es.title;
          suite2.textContent =
          container8.es.title;
          suite3.textContent =
          container9.es.title;
        }
        else if (window.location.hash == "#eng") {
          galeri.textContent =
          container0.eng.title
          reserva.textContent =
          container0.eng.text1
          titulo1.textContent =
          container1.eng.title;
          p1.textContent =
          container1.eng.text1
          p2.textContent =
          container1.eng.text2
          p3.textContent =
          container1.eng.text3
          titulo2.textContent =
          container2.eng.title;
          p4.textContent =
          container2.eng.text1
          titulo3.textContent =
          container3.eng.title;
          p5.textContent =
          container3.eng.text1
          p6.textContent =
          container3.eng.text2
          p7.textContent =
          container3.eng.text3
          locacion.textContent =
          container4.eng.title;
          titulo4.textContent =
          container5.eng.title;
          p8.textContent =
          container5.eng.text1
          boton.textContent=
          container5.eng.button
          suite.textContent =
          container6.eng.title;
          suite2.textContent =
          container7.eng.title;
          suite3.textContent =
          container8.eng.title;
          suite4.textContent =
          container9.eng.title;
        }
      }