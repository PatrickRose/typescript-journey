import {createProject, ts} from "@ts-morph/bootstrap";
import type { Diagnostic } from "typescript";

export async function compile(input: string): Promise<ReturnType<typeof ts["getPreEmitDiagnostics"]>> {
    const project = await createProject({useInMemoryFileSystem: true});

    project.createSourceFile(
        'test.ts',
        input
    );

    const program = project.createProgram();

    return ts.getPreEmitDiagnostics(program);
}
