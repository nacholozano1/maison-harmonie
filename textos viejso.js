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
          text1: "The building used to be the old annex of the church, and across the street, you can still find vestiges from the Middle Ages. In the 17th century, the structure was rebuilt and that's when it took on its current form. In the 19th century, a tower and outbuildings were added. It was finally restored, renovated, and furnished 5 years ago.",
          text2:" There is a large private garden, sheltered from the gaze of passers-by, very sunny and peaceful, with various outdoor spaces such as a beautiful terrace with a barbecue, perfect for family and social gatherings.",
          text3:"The house was furnished by its owners (one of whom is an architect and the other an art historian) by combining antiques, art objects, and modern design." 
        },
        es: {
          title: "Maison Harmonie: Sumérgete en la historia y el lujo de una residencia única.",
          text1:"La casa, que fue la antigua anexa de la iglesia, ha sido completamente restaurada respetando el estilo y la arquitectura original, pero con todas las comodidades modernas. En el siglo XVII, la estructura fue reconstruida y adoptó su forma actual. En el siglo XIX se agregó una torre y dependencias. Finalmente, hace 5 años, se restauró, renovó y amuebló.",
          text2:"Hay un gran jardín privado, muy soleado y tranquilo, con diferentes áreas al aire libre, incluyendo una terraza con barbacoa, perfecta para reuniones familiares y sociales.",
          text3:"La casa ha sido decorada por sus propietarios (uno es arquitecto y el otro historiador del arte) combinando antigüedades, objetos de arte y diseño moderno."
        },
      };

      let container2 = {
        eng: {
          title: "The best place for lovers of gastronomy and history.",
          text1: "Maison Harmonie is located next to the church of LA CHÂTRE. In the heart of the historic district of the city, in a very quiet area, close to shops, services, cafes, restaurants, museums, pastry shops and chocolatiers. 200 meters from the weekly market that offers quality regional products from Berry.",
        },
        es: {
          title: "La dirección ideal para los amantes de la gastronomía y la historia.",
          text1:"Maison Harmonie se encuentra al lado de la iglesia de LA CHÂTRE. En el corazón del barrio histórico de la ciudad, en una zona muy tranquila, cerca de tiendas, servicios, cafeterías, restaurantes, museos, pastelerías y chocolaterías. A 200 metros del mercado semanal que ofrece productos regionales de calidad de Berry.",
        },
      }

      let container3 = {
        eng: {
          title: "Discover nature and culture in La Châtre.",
          text1: "The area offers a great range of natural walks by the river and cultural heritage, (former antique hotels, and medieval streets). The George Sand House Museum is located in Nohant, 3 km from La Châtre.",
          text2: "The central location of La Châtre in the Berry region is perfect for visiting several cultural and natural places of interest in the Centre-Val de Loire region: castles, abbeys, picturesque villages, towns and forests. A beautiful combination that blends culture, nature and authenticity!",
          text3: "Various music festivals as well as art events and antique fairs take place in the surrounding areas, such as the Chopin Festival in Nohant and La Grange aux Pianos in Chassignolles." 
        },
        es: {
          title: "Descubre la naturaleza y la cultura en La Châtre.",
          text1:"El espacio ofrece una amplia variedad de paseos naturales por el río y el patrimonio cultural, incluyendo antiguos hoteles particulares, casas de carácter y calles medievales. La Casa Museo de George Sand se encuentra en Nohant, a 3 km de La Châtre.",
          text2:"La ubicación central de La Châtre en la región de Berry es perfecta para visitar varios lugares de interés cultural y natural en el Centro-Val de Loire, como castillos, abadías, pueblos pintorescos, ciudades y bosques. Es una combinación maravillosa de cultura, naturaleza y autenticidad.",
          text3:"Hay varios festivales de música, eventos de arte y ferias de antigüedades en los alrededores, como el Festival Chopin en Nohant y La Grange aux Pianos en Chassignolles."
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
        },
        es: {
          title: "Haz tu reserva ya.",
          text1:"Estás listo para vivir la historia de La Châtre? Reserva tu estadía ahora y descubre la belleza de nuestra Casa histórica en La Châtre. Con instalaciones de clase mundial, un servicio excepcional y una ubicación privilegiada en el corazón de la ciudad, ofrecemos la combinación perfecta de comodidad, elegancia y conveniencia. Ya sea que estés aquí para una escapada de fin de semana o una estadía prolongada, esperamos darte la bienvenida a nuestra hermosa Casa.",
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
          map.textContent =
          container4.es.title;
          titulo4.textContent =
          container5.es.title;
          p8.textContent =
          container5.es.text1
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
          map.textContent =
          container4.eng.title;
          titulo4.textContent =
          container5.eng.title;
          p8.textContent =
          container5.eng.text1
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