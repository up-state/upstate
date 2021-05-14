create table "user"
(
    id    serial not null
        constraint user_pk
            primary key,
    email citext not null,
    name  text
);

create unique index user_email_uindex
    on "user" (email);

