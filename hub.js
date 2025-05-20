


function ecole(ordre) {
            var image;
                if(ordre==1) {
                    image = "images/college.jpg"
                    lien ="https://liersetlemps-isere.ent.auvergnerhonealpes.fr/"
                }   
                else if(ordre==2) {
                    image = "images/lycee.jpg"
                    lien ="https://ferdinand-buisson.ent.auvergnerhonealpes.fr/"
                }
                else if(ordre==3) {
                    image = "images/prepa.jpg"
                    lien ="https://www.lycee-monge.fr/"
                }
                else {
                    image = "images/inge.jpg"
                    lien ="https://www-ensibs.univ-ubs.fr/fr/index.html"
                }
                document.getElementById('monImage').src=image;
                document.getElementById('LienImage').href = lien;
            }

