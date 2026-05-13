
// const Header = () => {
//   return (
//     <header className="main-header">
//       <div className="container">
//         <div className="logo">
//           <h1 id="web">My Website</h1>
//         </div>
//         <nav className="navbar">
//           <ul className="nav-links">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import Card from './Cards.jsx'

const Header = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change to sidebar after 150px of scrolling
      if (window.scrollY > 150) {
        setIsSidebar(true);
      } else {
        setIsSidebar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={isSidebar ? 'header sidebar' : 'header'}>
        <nav className="navbar">
          <Card className={isSidebar ? 'default': 'card-change'}></Card>
          <ul className="nav-links">
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className={isSidebar ? 'content-shifted' : 'content'}>
        <h1 className={isSidebar ? 'H1' : 'H1-static'}>Hello This is my web page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi repellat dolorem 
        enim beatae adipisci fugit atque, repellendus ex odio reiciendis accusamus possimus mollitia vel magnam iste, tenetur quis minus eaque hic, sint voluptatibus sunt quas incidunt. Mollitia officia fuga quibusdam nihil? Enim magnam voluptatibus, sit officia nisi natus iste itaque sequi corporis laudantium. Dolore modi repellendus enim quasi eos aspernatur quod autem iure soluta inventore, suscipit iusto veniam, consequuntur, unde est beatae assumenda facilis! Ratione accusantium quo hic temporibus. Voluptatum maiores soluta aut, modi sapiente, veritatis culpa nesciunt quibusdam hic, atque obcaecati corrupti voluptatibus debitis eum assumenda eaque sint?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel sapiente iste similique pariatur, dolore numquam dolores! Cupiditate provident placeat earum alias, eum totam accusantium, incidunt eveniet sint inventore eaque maiores! Eos explicabo magnam quos quaerat dolorum, asperiores laboriosam, nulla tenetur laudantium perferendis sapiente porro? Eum rem saepe unde fugit enim pariatur omnis at laborum repellat doloremque quasi voluptatibus inventore numquam, quam itaque nisi corporis. Dolorum, aliquid hic accusamus molestias quos dicta provident, porro nobis sunt optio pariatur quam ab aliquam temporibus error doloremque debitis accusantium
        repellendus, nostrum similique officiis exercitationem. Similique illo omnis velit facere id voluptatum, error odit deleniti architecto distinctio laboriosam libero enim aperiam tempore dignissimos, rem amet. Sed distinctio inventore, repellat itaque aliquid debitis sequi molestias in accusantium at adipisci, ex dolor quo quasi? Delectus perferendis sequi at veniam. Soluta rem ut laudantium quo vel. Eligendi reiciendis, possimus, quod recusandae iure iste officiis sed perferendis expedita minus alias? Ipsum blanditiis assumenda dolore maiores sunt, optio unde temporibus aperiam omnis aut laudantium delectus architecto, doloribus fugit odit dolorum hic,
        cumque eveniet tenetur nemo obcaecati molestias vitae voluptas? Recusandae libero iusto quaerat ipsam quod maxime sapiente itaque optio enim rerum tempore quae eos magnam dolore, exercitationem, doloremque eum animi corrupti dolorum atque alias nemo necessitatibus! Consequatur iure impedit nam porro aliquid reprehenderit quod, debitis ad incidunt modi excepturi iste molestias quis veritatis rerum voluptates laborum. Dignissimos ratione officia at. Cupiditate incidunt est cumque inventore sapiente accusantium voluptas dolor consequatur maxime assumenda provident in qui, consequuntur quos ex iure asperiores eum unde fugit aut id culpa. Quas nulla fugiat
         voluptatem non in repellat saepe ipsum distinctio eum enim quis pariatur adipisci, ipsa tenetur dolorem dolorum quibusdam natus excepturi illo fugit placeat! Nesciunt aliquam quibusdam facilis fugit fuga cum error debitis? Incidunt earum labore eius quod, hic corporis veritatis, tempora ea in enim quas at dolore veniam pariatur debitis laudantium dicta molestiae deserunt! Eum sit deleniti possimus aut explicabo tenetur? Unde aspernatur, asperiores tempora commodi molestiae labore facilis omnis sapiente, dolor distinctio, blanditiis placeat animi reiciendis delectus dolores ex natus maiores saepe. Laborum at illo laboriosam, exercitationem inventore quidem tempore repellendus commodi, fugiat nam, architecto accusantium consequuntur doloribus soluta? Sed iure soluta quaerat distinctio totam nesciunt ipsam delectus possimus. Quos beatae, non facere sint repellat quo ex quis, error tempora fugit officia quasi harum deleniti veniam aliquid recusandae modi veritatis. Asperiores possimus, libero, iure odit voluptas, enim voluptates dolore facere eligendi repellendus earum vel quibusdam repellat commodi quidem doloremque dicta cumque harum vitae! Adipisci impedit, laboriosam exercitationem molestiae pariatur sit, possimus architecto rerum eius doloremque cumque consequatur vero sint. Facere id est placeat sunt sapiente tempora in quas consectetur hic animi. Optio fuga nihil harum officiis. Dolorum placeat nulla inventore deserunt distinctio a nihil quasi similique asperiores laborum, eligendi dignissimos illum ipsa blanditiis ipsum sapiente commodi sed odit non eveniet! Nihil expedita necessitatibus at repudiandae suscipit libero provident similique doloremque, porro atque blanditiis neque officiis quidem, laboriosam in mollitia, quaerat alias ullam amet fugit saepe culpa optio obcaecati doloribus! Quidem eveniet similique error dolorem sunt ea ad adipisci, iste dicta esse quisquam neque necessitatibus omnis! Eos blanditiis ipsa nisi! Enim dolorum, cumque praesentium ab quidem tempore quia vero quis quod impedit, quam amet numquam nostrum perspiciatis molestiae animi facere exercitationem temporibus. Quo debitis asperiores ipsam esse, incidunt iste? Consequatur, quibusdam magni iste quisquam distinctio quam earum delectus dolore facilis cum. Molestias, enim modi ut iure vel mollitia! Exercitationem accusamus aliquid placeat quasi perspiciatis vero doloremque similique quas voluptates consequuntur, temporibus maxime molestias qui eveniet non optio dolor, ducimus magni, vel impedit. Inventore unde labore porro laudantium, deserunt modi. Vero harum dolor deleniti ab neque obcaecati ipsa accusamus deserunt at ea ut eaque perferendis mollitia, hic quis reiciendis, aperiam ad molestiae accusantium, quo ullam quisquam maxime rerum est? Beatae autem voluptates veniam corporis ea nam perspiciatis? Nobis doloremque voluptatibus reiciendis nostrum delectus hic at cum veritatis, rem a nisi minima sit magni, animi numquam necessitatibus, rerum laborum nemo cupiditate explicabo magnam! Illum deserunt eveniet et possimus dolorum, laboriosam numquam dolor! Harum delectus numquam eius, totam velit culpa ut cum consequatur dolore tempora ex quisquam non minima eos odio illo suscipit libero labore. Quae numquam soluta eum dolores corporis quis excepturi deleniti nemo? Ipsum, est accusamus. Incidunt quae quaerat fugit facere, rerum molestiae rem molestias, iusto consequatur eaque dolorem exercitationem corrupti ab tenetur fuga animi. Repudiandae quidem tempore amet deserunt vel sit obcaecati accusamus reprehenderit ea. Nulla quod neque qui ratione natus in accusantium, dolorem quo recusandae. Deserunt, minus, distinctio id cupiditate dolore quod corporis eius officiis sed dignissimos non officia voluptatum repellendus repudiandae ex rerum? Magnam inventore expedita qui explicabo quas suscipit aliquam, placeat repudiandae sit molestiae delectus natus esse officiis quod numquam iusto corrupti beatae laudantium nobis a similique dolorem. Maiores amet autem quis libero odio, repudiandae vel omnis pariatur, adipisci nisi magni nam molestias cupiditate mollitia dolor nihil ut fuga cumque accusantium nesciunt, modi dolore. Ex, ea beatae est laboriosam pariatur, quasi quisquam odit eius esse hic, magnam debitis. Asperiores, repudiandae earum quia sit delectus quo architecto ducimus, neque minus adipisci distinctio itaque sed quasi. Iste fugit aut quia similique at repellendus delectus officia asperiores nesciunt velit quasi facilis enim ducimus quod autem minima, officiis illum! Suscipit, inventore. Distinctio aliquam esse voluptatibus asperiores iusto amet error, qui nostrum laboriosam omnis quas in, labore non quod doloribus adipisci voluptatum laborum, eius culpa earum. Eos quae vero provident officiis nostrum veniam, similique dicta magnam, ullam alias natus distinctio sint adipisci tempora deserunt. Laudantium ratione perferendis facere provident at nostrum soluta placeat natus corporis eligendi nemo saepe non, dolores veritatis molestias aut rem molestiae. Tempore dolorum velit ullam, repudiandae tempora maiores officia porro voluptate laudantium. Nam, ipsum! Eum, quam suscipit rerum vel quia exercitationem unde similique assumenda necessitatibus omnis pariatur dolorem. Doloribus, quas! Id delectus quidem tempore, tempora nisi sint voluptatem, similique eius debitis voluptatum fuga ut sit vel! Modi, eos laudantium a temporibus, earum saepe adipisci reiciendis ea aspernatur, laborum dolore perferendis voluptatem. Nisi molestiae, natus tempora minus ad accusamus minima!
      </main>
    </>
  );
};

export default Header;
