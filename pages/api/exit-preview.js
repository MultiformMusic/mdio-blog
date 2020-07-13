
export default function exitpreview(_, res) {

    res.clearPreviewData();
    res.writeHead(307, {Location: '/'});
    res.end();
}