import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

export default async function Legal() {
    // Read the markdown file
    const filePath = path.join(process.cwd(), 'app', 'definitions', 'definitions.md');
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Compile the markdown to HTML
    const { content } = await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true }
    });

    return (
        <div className={`p-1 relative z-10 overflow-y-auto`}>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 flex justify-end">
                    <h2 className="flex items-center 
   w-full p-6 m-0 md:m-2 md:p-6 mx-auto md:mx-0 md:w-10/12 text-5xl font-black text-left text-indigo-900 uppercase">
                        Definitions
                    </h2>
                </div>
                <div className="w-full md:w-3/5 p-6 pl-8 m-0 md:m-2 mx-auto md:mx-0 md:w-10/12">
                    <p className="font-bold m-0 p-0 text-2xl text-center text-zinc-500 uppercase">Terminology
                    </p>
                </div>
            </div>
            <div className="markdown-content leading-loose md:m-6 md:p-6 md:my-4 md:py-2 m-2 p-2 text-md font-bold text-left text-zinc-700">
                {content}
            </div>
        </div>
    );
}