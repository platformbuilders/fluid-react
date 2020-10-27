const mz = require('mz/fs');
const rimraf = require('rmfr');

const nativeModulesDirectory = `${__dirname}/../native`;
const nativeFolder = `${nativeModulesDirectory}/native`;

const distModulesDirectory = `${__dirname}/../dist`;

const blackListRemove = [
  'native',
  'index.js',
  'index.js.map',
  'index.esm.js',
  'index.esm.js.map',
];

async function removeAndMoveNewFiles() {
  const contents = await mz.readdir(nativeModulesDirectory);
  await Promise.all(
    contents.map(async (filename) => {
      if (blackListRemove.includes(filename)) return;
      await rimraf(`${nativeModulesDirectory}/${filename}`);
    }),
  );
  const nativeFolderContent = await mz.readdir(nativeFolder);
  await Promise.all(
    nativeFolderContent.map(async (filename) => {
      await mz.rename(
        `${nativeFolder}/${filename}`,
        `${nativeModulesDirectory}/${filename}`,
      );
    }),
  );
  await mz.rmdir(nativeFolder);
}

async function removeNativeFolderFromDist() {
  await rimraf(`${distModulesDirectory}/native`);
}

removeAndMoveNewFiles();
removeNativeFolderFromDist();
