
# The database is dockerized 

### Run the following command

```docker run --name dev-postgres -e POSTGRES_PASSWORD=Password2021! -v /data/:/var/lib/postgresql/data -p 5432:5432 postgres```