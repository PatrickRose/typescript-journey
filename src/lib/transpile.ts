import {createProject, ts} from "@ts-morph/bootstrap";

export async function compile(input: string): Promise<ReturnType<typeof ts["getPreEmitDiagnostics"]>> {
    const project = await createProject({useInMemoryFileSystem: true, compilerOptions: {lib: ['lib.esnext.d.ts']} });

    project.createSourceFile(
        'test.ts',
        input
    );

    const program = project.createProgram();

    return ts.getPreEmitDiagnostics(program);
}
