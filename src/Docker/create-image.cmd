docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamat12/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t postamat12/app ../..
