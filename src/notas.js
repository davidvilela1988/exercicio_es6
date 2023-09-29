const alunos = [
  { nome: "David Vilela", nota: 9.5 },
  { nome: "Selma Correia", nota: 5.5 },
  { nome: "Luiz Augusto", nota: 3.5 },
  { nome: "Lis Vilela", nota: 6.0 },
  { nome: "Luana Bomfim", nota: 8.5 },
];

const alunosAprovados = (alunos) => alunos.filter((aluno) => aluno.nota >= 6);

const listaAlunosAprovados = alunosAprovados(alunos);

console.log("Lista de alunos aprovados:");

listaAlunosAprovados.forEach((aluno) =>
  console.log(`Aluno(a): ${aluno.nome}; Nota: ${aluno.nota}`)
);
