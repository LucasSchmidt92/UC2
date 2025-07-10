create table Dinossauros(
  id_dinossauro bigserial primary key,
  nome_dinossauro varchar(255) not null,
  especie_dinossauro varchar(255) not null,
  dieta_dinossauro varchar(255) not null,
   idade_estimada_anos int not null,
	status_cercado_dinossauro varchar (255) not null
)