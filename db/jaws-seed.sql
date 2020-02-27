use jajf6v9y8hrtiu3g;

insert into users (username, email, password)
values ('MossyVarietypack29', 'user1@address.com', 'pass'),
    ('GlisteningJambalaya04', 'user2@address.com', 'pass'),
    ('DeepenedPlasma3', 'user3@address.com', 'pass');

insert into skills (subject)
values ('HTML'),('CSS'),('JavaScript'),('jQuery'),('APIs'),('Git'),('Node'),('Express'),('MySQL'),('React'),('NoSQL');

insert into posts (body, user_id, skill_id, reply_to_id)
values ('Need help with SQL', 1, 1, NULL),
    ('Need help with Node', 2, 2, NULL),
    ('Need help with jQuery', 3, 3, NULL),
    ('Hey, I can help with that!', 3, NULL, 1);
