--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: genres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genres (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: genres_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genres_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genres_id_seq OWNED BY public.genres.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    name text NOT NULL,
    plataform integer,
    genre integer,
    statusmovie integer,
    grade integer,
    note text,
    userid integer
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: plataforms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.plataforms (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: plataforms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.plataforms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: plataforms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.plataforms_id_seq OWNED BY public.plataforms.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    userid integer NOT NULL,
    token text NOT NULL,
    active boolean DEFAULT true NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: status; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.status (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: status_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: status_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.status_id_seq OWNED BY public.status.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(250) NOT NULL,
    email character varying(250) NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: genres id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres ALTER COLUMN id SET DEFAULT nextval('public.genres_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: plataforms id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plataforms ALTER COLUMN id SET DEFAULT nextval('public.plataforms_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: status id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.status ALTER COLUMN id SET DEFAULT nextval('public.status_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genres VALUES (1, 'ação');
INSERT INTO public.genres VALUES (2, 'aventura');
INSERT INTO public.genres VALUES (3, 'comédia');
INSERT INTO public.genres VALUES (4, 'comédia romântica');
INSERT INTO public.genres VALUES (5, 'dança');
INSERT INTO public.genres VALUES (6, 'documentário');
INSERT INTO public.genres VALUES (7, 'drama');
INSERT INTO public.genres VALUES (8, 'ficção científica');
INSERT INTO public.genres VALUES (9, 'guerra');
INSERT INTO public.genres VALUES (10, 'suspense');
INSERT INTO public.genres VALUES (11, 'romance');
INSERT INTO public.genres VALUES (12, 'terror');


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (18, 'thor amor e trovão', 1, 3, 2, 0, 'muito ruim, isso aí', 5);
INSERT INTO public.movies VALUES (20, 'thor amor e trovão', 1, 3, 1, 10, 'teste', 5);
INSERT INTO public.movies VALUES (21, 'feito na america', 2, 3, 1, NULL, NULL, 5);
INSERT INTO public.movies VALUES (24, 'Annabele', 1, 12, 1, 10, 'muito ruim', 6);
INSERT INTO public.movies VALUES (25, 'Annabele', 1, 12, 1, 10, 'muito ruim', 6);
INSERT INTO public.movies VALUES (26, 'Annabele', 1, 12, 1, NULL, 'muito ruim', 6);


--
-- Data for Name: plataforms; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.plataforms VALUES (1, 'Netflix');
INSERT INTO public.plataforms VALUES (2, 'Amazon');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (14, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjQsImlhdCI6MTY2ODA5ODgzMn0.8a2n0E8YuzOvjS7gBjtVogkAu1G_zTQErsTth9WkYAM', true);
INSERT INTO public.sessions VALUES (15, 5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjUsImlhdCI6MTY2ODExMDkyNH0.qMKOZ2F4JWilvwyOIjBPGyci6MNkPbjOOiLNDxdSw7o', true);
INSERT INTO public.sessions VALUES (16, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjIsImlhdCI6MTY2ODEyMjc4N30.TYj5vrMMsYOkxPw1LQZ_it5VkQxZDxUVuIJebrybN_w', true);
INSERT INTO public.sessions VALUES (17, 6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjYsImlhdCI6MTY2ODEyNzYwOX0.WP4gIfMfsCNAOSvyAQFI2QPfIO52VBN5UNMOjECvxOc', true);


--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.status VALUES (1, 'Watched');
INSERT INTO public.status VALUES (2, 'Dont watched');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (2, 'elias manica', 'a@gmail.com', '$2b$12$WtrtXDTegMV9zMbevic8.uhL0LI.VYbF860rxgaIt9kuE6pqLyZIO');
INSERT INTO public.users VALUES (3, 'elias manica', 'b@gmail.com', '$2b$12$BUZaL9cojbfHy.1UVC4izeqtCyw0XR4KqBNDv03CW9zzRNFdwQMry');
INSERT INTO public.users VALUES (4, 'c', 'c@gmail.com', '$2b$12$SH4lx/bfImQMuyZ1PQWTselnYDZU/huoGmwlnuP.N1BTgJdDBSneq');
INSERT INTO public.users VALUES (5, 'Teste', 'teste@gmail.com', '$2b$12$6axpuN9hcdXe97CGuA3eu.7RyEvjsU/yKfqENKKLFJNm0bgL8QP0i');
INSERT INTO public.users VALUES (6, 'lele', 'lele@gmail.com', '$2b$12$/ezWp.v6NZbOa6oU4f25SufdUwHiK2AmMVRkly1ZE5n/kMjGPV/hi');


--
-- Name: genres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genres_id_seq', 12, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 26, true);


--
-- Name: plataforms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.plataforms_id_seq', 2, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 17, true);


--
-- Name: status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.status_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: genres genres_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_name_key UNIQUE (name);


--
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (id);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: plataforms plataforms_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plataforms
    ADD CONSTRAINT plataforms_name_key UNIQUE (name);


--
-- Name: plataforms plataforms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plataforms
    ADD CONSTRAINT plataforms_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: status status_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_name_key UNIQUE (name);


--
-- Name: status status_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: movies movies_genre_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_genre_fkey FOREIGN KEY (genre) REFERENCES public.genres(id);


--
-- Name: movies movies_plataform_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_plataform_fkey FOREIGN KEY (plataform) REFERENCES public.plataforms(id);


--
-- Name: movies movies_statusmovie_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_statusmovie_fkey FOREIGN KEY (statusmovie) REFERENCES public.status(id);


--
-- Name: movies movies_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- Name: sessions sessions_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

