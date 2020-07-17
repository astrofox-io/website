import requestIp from 'request-ip';

export default (req, res) => {
  res.status(200).json({ ip: requestIp.getClientIp(req), headers: req.headers });
};
