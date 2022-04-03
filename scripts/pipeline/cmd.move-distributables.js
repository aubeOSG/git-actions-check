import fs from '../utils/file-system.js'

const fileMap = {
  'apps/content-authoring/out/make/content_authoring.dmg': {
    dest: 'web-publish/dist/content_authoring.dmg'
  }
}

const copy = () => {
  let contents, dest

  for (let file in fileMap) {
    contents = fs.getFile(file)
    dest = fileMap[file].dest

    fs.copyFile(file, dest)
  }
}

copy()
