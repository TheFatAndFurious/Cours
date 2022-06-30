CREATE DATABASE testBDD;
USE testBDD;
CREATE TABLE article (
	id_article bigint(20) NOT NULL PRIMARY KEY auto_increment,
    nom_article varchar(200) NOT NULL,
    prix_article float(10) NOT NULL
);

ALTER TABLE article
	change prix_article article_price float(20);
    
CREATE TABLE ajouter(
id_ticket bigint(20),
id_article bigint(20) 
);

ALTER TABLE ajouter
	ADD column qtx int(10) NOT NULL,
    ADD CONSTRAINT id_article FOREIGN KEY(id_article) REFERENCES article (id_article);
    
    CREATE table vendeur(
    id_vendeur bigint(20) NOT NULL PRIMARY KEY auto_increment,
    nom_vendeur varchar(50) NOT NULL,
    prenom_vendeur varchar(50) NOT NULL
    );
    
    CREATE table ticket(
    id_ticket bigint(20) NOT NULL primary KEY auto_increment,
    date_ticket date not null,
    id_vendeur bigint(20) not null,
    foreign key(id_vendeur) references vendeur(id_vendeur)
    );
    
    ALTER TABLE ajouter
    ADD constraint foreign key (id_ticket) references ticket(id_ticket);
    
    CREATE DATABASE facturation;
    use facturation;
    
    CREATE TABLE clients(
    idClients bigint(20) primary KEY NOT NULL auto_increment,
    nom_client varchar(50) not null,
    prenom_client varchar(50) not null,
    telephone_client varchar(50),
    idVille bigint(20) not null
    );
    
    CREATE TABLE factures(
    id_factures bigint(20) primary key not null auto_increment,
    numeroFacture bigint(20) not null,
    idClients bigint(20) not null,
    foreign key(idClients) references clients(idClients)
    );
    
    CREATE TABLE villes(
    idVille bigint(20) primary key not null auto_increment,
    nomVille varchar(50) not null,
    codePostal bigint(20)
    );
    
    alter table clients
    add constraint foreign key(idVille) references villes(idVille);
    
    CREATE DATABASE facturation;
    use facturation;
    
    use facturation;
    
    CREATE TABLE clients(
    idClients bigint(20) primary KEY NOT NULL auto_increment,
    nom_client varchar(50) not null,
    prenom_client varchar(50) not null,
    telephone_client varchar(50),
    idVille bigint(20) not null
    );
    
    CREATE TABLE factures(
    id_factures bigint(20) primary key not null auto_increment,
    numeroFacture bigint(20) not null,
    idClients bigint(20) not null,
    foreign key(idClients) references clients(idClients)
    );
    
    CREATE TABLE villes(
    idVille bigint(20) primary key not null auto_increment,
    nomVille varchar(50) not null,
    codePostal bigint(20)
    );
    
    alter table clients
    add constraint foreign key(idVille) references villes(idVille);
    
    use testbdd;
    
    INSERT INTO article (nom_article, article_price)
    values("oeuf",1.80),
    ("pomme de terre",5),
    ("navet",0.30);
    
    update article
    set article_price = 1.3
    where id_article = 3;
    
    update article
    set article_price = 50
    where id_article = 1 or id_article = 3;
    
    update article
    set article_price = 10
    where id_article <= 3;
    
    update article
    set article_price = 60
    where id_article = 1 or  id_article = 3;
    
    use facturation;
    

    insert into villes (nomVille, codePostal)
    values ("toulouse", 31500),
    ("balma", 31130),
    ("toulouse", 31500);
    
    insert into clients (nom_client, prenom_client, telephone_client, idVille)
    values("dusse", "jean-claude","0561485712", 7),
    ("apeupres", "jean-michel", "0558575612", 8),
    ("rockstar", "kefenn", "0561480597", 9);
    
    insert into factures (numeroFacture, idClients)
    values (1234, 7),
    (2345, 8),
    (3456, 9);

insert into villes (nomVille, codePostal) values
("Fenouillet", 31150);

update villes
set codePostal = 32000
where idVille = 4;

select nom_article nom, article_price prix
from article
where nom_article = "oeuf";

insert into clients (nom_client, prenom_client, telephone_client, idVille)
    values("Depriester", "Yoann","+33.00.95.77.45.32", 3),
    ("Mithridate", "Mathieu", "05.33.33.11.11",4),
    ("Zendaya", "Chloé", "05.68.45.96.12",1);
    
    select nom_client, prenom_client, idVille ville
    from clients
    where prenom_client like "y%" and idVille = 3;
    
    insert into clients (nom_client, prenom_client, telephone_client, idVille)
    values("Dupont", "Jean", 0561450597, 3),
    ("Dupont", "Jacques", 0561482565, 3),
    ("Dupont", "Georges", 0561582841, 2);
    
    select nom_client, max(prenom_client)
    from clients
    group by nom_client;
    
    
    select nom_client, prenom_client, clients.idVille, nomVille, codePostal
    from clients
    inner join villes on clients.idVille = villes.idVille; 
    
    select numeroFacture, factures.id_factures, nom_Client, prenom_client
    from factures
    inner join clients on factures.idClients = clients.idClients;
    
    select numeroFacture, factures.id_factures, nom_Client, prenom_client, nomVille
    from factures
    inner join clients 
    on factures.idClients = clients.idClients
    inner join villes on clients.idVille = villes.idVille;
    
    insert into vendeur(nom_vendeur, prenom_vendeur) values
    ("Castrais", "Ilaperdu"),
    ("Smith", "Steve"),
    ("Hallyday", "Johnny"),
    ("Montagné", "Gilbert");
    
    insert into ticket (date_ticket, id_vendeur) values
    ("29-04-12",1),
    ("31-02-11",2),
    ("25-07-16",3),
    ("12-12-14",4);
    
    insert into ajouter (id_ticket, id_article, qtx) values
    (1,1,1),
    (2,3,3),
    (2,2,9),
	(2,1,10),
    (3,2,2),
    (3,3,3),
    (4,3,1),
	(4,2,3),
    (4,2,1),
    (4,1,20); 
    
    select nom_vendeur, prenom_vendeur, ticket.id_ticket, date_ticket
    from ticket
    inner join vendeur on ticket.id_ticket = vendeur.id_vendeur;
    
    select article.nom_article, date_ticket, qtx, nom_vendeur, (select max(qtx) from ajouter group by (qtx))
    from article
    inner join ticket on article.id_article = ticket.id_ticket
    inner join ajouter on ticket.id_ticket = ajouter.id_article
    inner join  vendeur on ticket.id_ticket = vendeur.id_vendeur;
  
    
    
    
    
    

    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    








    
    
    
    
    
    
    

    
    
    
    